const asyncHandler = (requestHandler) =>{
    (req,res,next) =>{
        Promise.resolve(requestHandler(req,res,next)).
        catch(err)
    }
}



 
// export default asyncHandler;

// // const asyncHandler = (fn) => {
// //     async (req,res,next) =>{
// //         try{
// //             await fn(req,res,next)
// //         }
// //         catch(e){
// //             res.status(e).json({
// //                 success : true,
// //                 message : e.message
// //             })
// //         }
// //     }
// // }





































