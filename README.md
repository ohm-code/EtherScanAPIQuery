# EtherScanAPIQuery
#ohm-code
#12/17

Mainnet URL https://api.etherscan.io/

Exports transactionInfo // contains eth address,balance,last 10 transactions' hash, value and confirmations as JSON


Update ethAddress line2 to change ethereum address 
const ethAddress = '' 


Return ether Balance;
https://api.etherscan.io/api
   ?module=account
   &action=balance
   &address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae
   &tag=latest
   &apikey=S4FI5B7J72PHRP85RGISJGZW1ANBRU72PI
   
   Token Transfer Events by address:
   
   https://api.etherscan.io/api
   ?module=account
   &action=tokentx
   &contractaddress=0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2
   &address=0x4e83362442b8d1bec281594cea3050c8eb01311c
   &page=1
   &offset=100
   &startblock=0
   &endblock=27025780
   &sort=asc
   &apikey=https://api.etherscan.io/api
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
