import loggedin from "./loggedin";
import { User } from "./users";


export default function(dbUser:User, formInfo:{username:string, password:string}){

    if( formInfo.username === dbUser.username ){
         
        if( formInfo.password === dbUser.password ){

            localStorage.setItem('username', formInfo.username);
            loggedin();

        } else{

            console.error("se produjo un error ")

        }

    } else{
       return;
    }

}
