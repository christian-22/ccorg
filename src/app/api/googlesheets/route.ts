// export async function POST(req: Request) {
//     try {
//       const body = await req.json();
  
//       // Send data to your Google Sheets API (GAS endpoint)
//       const googleSheetUrl = 'TBD';
  
//       const response = await fetch(googleSheetUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body), // forward the body of the request to GAS
//       });
  
//       if (response.ok) {
//         return new Response(JSON.stringify({ message: 'Data submitted successfully!' }), { status: 200 });
//       } else {
//         return new Response(JSON.stringify({ message: 'Failed to submit data to Google Sheets' }), { status: 500 });
//       }
//     } catch (error) {
//       return new Response(JSON.stringify({ message: 'Error connecting to Google Sheets' }), { status: 500 });
//     }
//   }
  