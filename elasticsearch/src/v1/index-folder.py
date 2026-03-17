from elasticsearch import Elasticsearch, helpers
import os
import time

# Connect to Elasticsearch
es = Elasticsearch("http://elasticsearch:9200", verify_certs=False)

# Wait for Elasticsearch to be ready
while True:
    try:
        if es.ping():
            print("Connected to Elasticsearch!")
            break
    except Exception:
        pass
    print("Waiting for Elasticsearch...")
    time.sleep(2)

index_name = "myfiles"
folder_path = "elastic-data"

# Make sure index exists
if not es.indices.exists(index=index_name):
    es.indices.create(index=index_name)
    print(f"Created index '{index_name}'.")

# Prepare bulk data
actions = []

for filename in os.listdir(folder_path):
    file_path = os.path.join(folder_path, filename)
    if os.path.isfile(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            actions.append({
                "_index": index_name,
                "_source": {
                    "filename": filename,
                    "content": content
                }
            })

if actions:
    helpers.bulk(es, actions)
    print(f"Successfully indexed {len(actions)} files!")

print("Done.")
