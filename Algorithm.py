import pandas as pd
from sklearn.ensemble import IsolationForest

# Read transaction data from CSV file
transaction_data = pd.read_csv('path/to/transaction_data.csv')

# Run isolation forest algorithm on transaction data
clf = IsolationForest(n_estimators=100, max_samples='auto', contamination=0.1, random_state=42)
clf.fit(transaction_data)
anomaly_scores = clf.predict(transaction_data)

# Set threshold for anomaly scores
threshold = -0.5

# Flag transactions with anomaly score greater than threshold
suspicious_transactions = transaction_data[anomaly_scores < threshold]

# Output suspicious transactions
print(suspicious_transactions)
