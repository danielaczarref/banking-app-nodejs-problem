var customerList=[];

const addCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      const existingCustomer = customerList.find((customer) => customer[0] === CustomerId);
      if (existingCustomer) {
        return;
      }
      const newCustomer = [
            CustomerId,
            CustomerName,
            CustomerAge,
            CustomerAddress,
            CustomerContactNumber,
            Category
      ];
      customerList.push(newCustomer);
}

const updateCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      const index = customerList.findIndex((customer) => customer[0] === CustomerId);
      if (index !== -1) {
        customerList[index] = [
          CustomerId,
          CustomerName,
          CustomerAge,
          CustomerAddress,
          CustomerContactNumber,
          Category,
        ];
      }
}

const getAllCustomers=()=>{
  return customerList;
}

module.exports={addCustomer,updateCustomer,getAllCustomers}