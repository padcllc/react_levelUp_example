function roleHook(params:string) {
   let showValue: boolean = false;

   if (params === 'user' || params === 'superadmin') {
      showValue = true;
   }
   else {
      showValue = false;
      }
   return showValue;
}


export default roleHook;