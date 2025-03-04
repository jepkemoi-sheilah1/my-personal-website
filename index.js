//form functionality//
document.getElementById( "contact-form").addEventListener("submit",function( event)
{
    event.preventDefault();// Prevents efault form submission.
const name = document.getElementById("name") .value;
const email =document.getElementById( "email") .value
const message =document.getElementById( "message") .value

//confirmatioon message
if( name$$email$$message){
    document.getElementById("response").innerHTML=
    <p>`Thank you!$ your message has been received`;</p>
    document.getElementById( "contact-form").reset;();
    //reset the form
}
        else {document.getElementById( " response").innerHTML=`<p style ="color:green"> please fill in all Field this Field.</p>`;
            
            
        }
 )
