import React, { Suspense, lazy} from 'react';
// import lazy from 'react-lazy-named';

// const fontIcon = lazy(()=>
//     import('@fortawesome/react-fontawesome'), 'FontAwesomeIcon');

// export const FontIcon = props=>(
// <Suspense fallback ={<div/>}>
//     <fontIcon {...props}/>
// </Suspense>
// )

// // const faIcon = lazy(()=>
// //     import('@fortawesome/free-brands-svg-icons').then(mod=>({
// //         default: mod.faFacebookSquare
// //     }))
// // );

// const faIcon = lazy(()=> import('@fortawesome/free-brands-svg-icons'),'faFacebookSquare');
// export const fbIcon = props=>(
// <Suspense fallback={<div/>}>
//     <faIcon {...props}/>
// </Suspense>
// )

const reactCarousel = lazy(()=>import('@brainhubeu/react-carousel').then(mod=>({
    default: mod.BrainhubCarousel
}))
)
