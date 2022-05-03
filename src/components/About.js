// import React from 'react';
import React from 'react';
// import SwipeableTextMobileStepper from './cardimg';
import RecipeReviewCard from './cards';
import VerticalLinearStepper from './stepper';
// import notecontext from '../context/notes/notecontext';
const About = () => {
  
  
  return (

    <div className='bg-gray-700 rounded-md '>
      <h4 className='text1 mb-3 ml-6'>Application workflow</h4>
      <VerticalLinearStepper></VerticalLinearStepper>
 {/* <SwipeableTextMobileStepper></SwipeableTextMobileStepper> */}
 
      <h4 className='text1 mb-3 ml-6'>Some intresting thread</h4>
    <RecipeReviewCard></RecipeReviewCard>
    </div>
    
  )
}

export default About