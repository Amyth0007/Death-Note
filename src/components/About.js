// import React from 'react';
import React from 'react';
// import notecontext from '../context/notes/notecontext';
import deathnote1 from './images/deathnote1.jpg';
const About = () => {
  const hStyle = { color: 'white' };
  const pstyle = { color: 'Black' };
  
  
  return (

    <div>
         <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img className="lg:w-2/9 md:w-3/9 w-5/9 mb-5 object-cover object-center rounded" alt="hero" src={deathnote1}/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" style={hStyle}>The Death Note</h1>
      <p className="mb-8 leading-relaxed" style={pstyle}>
DeathNote has been made for you to comfortably track your Notes and To Dos.
DeathNote is a Note making app, which will let you to track your Notes and Todos...
Unlike other Note making app, DeathNote is free and open source.
To use DeathNote, You will need a DeathNote account first, which you can easily create using the app.

Tech Stacks used in-app:
1. Reactjs for frontend
2. Mongodb atlas for the database
3. Node and Expressjs for backend

The Web app lets you:
1. To make your pesrnalised Notes
2. Also you can keep track of yours notes
3. Completely ad-free.
5. you can delet as well as edit your notes whenever you want. 

On Web version, Deathnote requires the following permissions:
1. Internet Connection

Yes, that's all we need :)

For now, we want suggestions on our app so that we can improve it and make it more user-friendly.
We have source code online on GitHub and anyone who is interested to contribute to the project can do it from the given link below. We believe in public learning so that's why We have also created some beginner-friendly good first issues so that any beginner can start and get Web  development exposure.
Do share your thoughts on the application, it will help us make it better, Thanks :</p>
      <div className="flex justify-center">
       </div>
    </div>
  </div>
</section>  




    </div>
  )
}

export default About