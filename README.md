# EtherScanAPIQuery
#ohm-code
#12/17

Mainnet URL https://api.etherscan.io/

input: const ethAddress = '' 

Exports transactionInfo // contains eth address,balance,last 10 transactions' hash, value and confirmations as JSON



API used:

Return ether Balance;
https://api.etherscan.io/api
   ?module=account
   &action=balance
   &address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae
   &tag=latest
   &apikey=S4FI5B7J72PHRP85RGISJGZW1ANBRU72PI
   
   
   List of normal transactions
   https://api.etherscan.io/api
   ?module=account
   &action=txlist
   &address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a
   &startblock=0
   &endblock=99999999
   &page=1
   &offset=10
   &sort=asc
   &apikey=S4FI5B7J72PHRP85RGISJGZW1ANBRU72PI
