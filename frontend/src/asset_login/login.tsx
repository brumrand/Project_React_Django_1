

export const Login = () =>{
    let mainMenuRoute :string = "/mainMenu"
    return (
        <>

        <input type="text" placeholder="Email" name="mail"/>
        <input type="password" placeholder="Password" name="password"/>
        <a href={mainMenuRoute}> <button>Acceder</button></a>

        </>

     


    )
}