const Web3 = require('web3');

class TransactionChecker {
     web3;

    constructor(projectId) {
        this.web3 = new Web3(new Web3.providers.HttpProvider(projectId));
    }

    async checkBlock() {
        let block = await this.web3.eth.getBlock('latest');
        let number = block.number;
    
        console.log('Searching block ' + number);

        if (block != null && block.transactions != null) {
            console.log("so jao");
            
            block.transactions.forEach(function(transaction) {
                         console.log(transaction);
                        
                         console.log('Timestamp:', new Date(transaction.timestamp * 1000).toISOString());
                         console.log('From:', transaction.from);
                         console.log('To:', transaction.to);
                         console.log('Value:', transaction.value);
                       });
        }
    }
}

proid = 'https://goerli.infura.io/v3/65bf0315a04a40d89ba9a50d9d0dbe2e';
myid = '65bf0315a04a40d89ba9a50d9d0dbe2e';

let txChecker = new TransactionChecker(proid);
txChecker.checkBlock();
