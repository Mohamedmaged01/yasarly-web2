// 'use client'
// // components/withAuth.js
// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// const WidthAuth = (WrappedComponent) => {
//   return (props) => {
//     const router = useRouter();

//     useEffect(() => {
//       const studentId = localStorage.getItem('studentId');
//       if (!studentId) {
//         router.push('/login'); // Redirect to login page if no studentId
//       }
//     }, [router]);

//     return <WrappedComponent {...props} />;
//   };
// };

// export default WidthAuth;
