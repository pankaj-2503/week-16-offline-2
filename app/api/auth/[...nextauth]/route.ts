
import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";
const handler= NextAuth({
     providers:[
        CredentialsProvider({
            name:"Email",
            credentials: {
               username: {label:'Username',type:'text', placeholder:'Email'},
               password: {label:'password',type:'password',placeholder:'Password'},
            },
            async authorize(credentials:any){
                console.log(credentials);
                //validation
                return {
                    id:"user1",
                    name:"pankaj singh",
                    email:"pankajpj3103@gmail.com"
                };
            },
        })

    ],
    secret:process.env.NEXTAUTH_URL
});



export const GET= handler;
export const POST=handler;