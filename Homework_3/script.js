

function calculateCash(){
   let myAmount = 30000;
   let atmAmount = 100000;

   let getCash = parseInt(prompt('Please enter the amount of cash for withdrawal'));

   if (getCash <= myAmount) {

         myAmount-=getCash;
         atmAmount-=getCash;

         console.log(`You have whitdrawn: ${getCash} dollars from your account, and you have left ${myAmount} dollars`);
      }
   else if (getCash > myAmount){

         console.log('Not enough money on your account');
      }


      };


calculateCash();
