import { Component, OnInit, Inject } from'@angular/core';  
import { MatDialog,MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';  
import { User } from 'src/Model/user';
import { UserService } from 'src/service/UserService';
@Component({  
   selector:'user-edit',  
   templateUrl:'./UserEdit.html' ,
   styleUrls:['./UserEdit.css']
})  
export class UserEditComponent implements OnInit {  
   userModel :User=new User("","","","");
   returnData={usermodel:this.userModel,isEdited:true};
   constructor(@Inject(MAT_DIALOG_DATA) data:any,userService:UserService,private dialogref:MatDialogRef<UserEditComponent>) 
   {
      this.userModel.FirstName=data.usermodel.FirstName;    
      this.userModel.LastName=data.usermodel.LastName;    
    }
    OnCancel()
    {
       this.dialogref.close();
    }  
    OnOk(FirstName)
    {
       if(FirstName.touched)
       {
      this.returnData.isEdited=FirstName.touched;
      this.dialogref.close(this.returnData);
       }
   }
   ngOnInit() 
   {  
    
   }  
}