
const ethAddress = window.prompt("enter ethereum address or default to test",'0x829BD824B016326A401d083B33D092293333A830') 
const apiKey = 'S4FI5B7J72PHRP85RGISJGZW1ANBRU72PI'
const transactionOutput = {'Ethereum Address': `${ethAddress}`}
let exportData 

const weiToEthConversion = (number)=>{
    return number/1000000000/1000000000
    } 

const getCurrentBalance = fetch(
`https://api.etherscan.io/api
?module=account
&action=balance
&address=${ethAddress}
&tag=latest
&apikey=${apiKey}`,
    {mode:'cors'})  
    .then(function(response){
        return response.json() 
    })

const ethBalance = getCurrentBalance.then((value)=>{  // test code
        const wei = value.result
        transactionOutput['Current Ether Balance:'] = weiToEthConversion(wei);
        return wei  
   })

const getTransactionData = fetch(`https://api.etherscan.io/api
?module=account
&action=txlist
&address=${ethAddress}
&startblock=0
&endblock=99999999
&page=1
&offset=10
&sort=asc
&apikey=${apiKey}`,
    {mode:'cors'}   
    ).then((response)=>{
        return response.json()
    })

const transactionData = getTransactionData.then((value)=>{
        return value.result
    })

async function getTransactionInfo() { 
    let data = await transactionData  //returns all normal recent transaction data
    data.forEach(element => { 
       transactionOutput[element.hash] = { 
           'hash': `${element.hash}`, 
           'transactionEtherValue':`${weiToEthConversion(element.value)}`, 
           'confirmations': `${element.confirmations}`} 
    })

    return transactionOutput
};

export const transactionInfo = () => {
    getTransactionInfo().then((value)=>{
    exportData = JSON.stringify(value)
    return exportData
})}
 

//for dev only
const displayInfo = getTransactionInfo().then((value)=>{ // to display info on html page
    const container = document.getElementById('container'); 
    Object.keys(value).forEach((element,index) =>{ //elements are keys
        let p = document.createElement('p')
       
        const lineBreak = document.createElement('br')
           
        if (index>1){
            for (let i = 0; i < Object.keys(value[element]).length ; i++) {
            let ul = document.createElement('ul')
            console.log(Object.keys(value[element])[i])    
            console.log(Object.values(value[element])[i])  
            ul.textContent = Object.keys(value[element])[i] + " : " +Object.values(value[element])[i]
            container.appendChild(ul) 
            }  
        } else 
        {
            p.textContent = element + value[element]
        }
        container.appendChild(p)

    }) 
})



