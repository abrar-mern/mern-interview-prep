1.) What is authentication ?
Answer - it is the process of verifying the user

-------------------------------------------------------------------------------------------

2.) What is authorization ?
Answer - It is the process of verifying which user have what access like files and folders

-------------------------------------------------------------------------------------------

3.) What is jwt token ?
Answer - jwt stands for json web token that is used to securely transmit information between 2 parties as a JSON object. 
Mostly used in authentication and authorization.

-------------------------------------------------------------------------------------------

4.) Explain the structure of JWT ?
Answer - As jwt is a single string composed by three parts sperated by dot
for eg - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30

a.) Header - The header typically consist of 2 parts the type and the algorithm being used
 {
    "typ":"jwt",
    "alg":"HS256"
 }

 b.) Payload - It is a small piece of information that we want to share it securely

 {
    id : 123,
    name : 'Abrar'
 }

c.) Signature  - This is the most important part of the security to create a signature you take the encoded header, encoded payloaded, a secret key and the algorithm used.


-------------------------------------------------------------------------------------------

5.) What is Base64 ?
Answer - Base64 is binary to text encoding scheme it takes any data (text,images,files) and convert it into a string using specific 64 specific characters
a.) Uppercase - [A-Z]
b.) Lowercase - [a-z]
c.) Numbers - [0-9]
d.) Symbols - [+,/]

-------------------------------------------------------------------------------------------

6.) What is Base64 Url ?
Answer - We have used special version that is base64url
here + and / have symbolic meaning that is + stands for space and / stands for file. To prevent this base64url preventd this by 
a.) + is replace by - 
b.) / is replaced by _
c.) = is removed.

-------------------------------------------------------------------------------------------

7.) What is Encoding ?
Answer - Encoding is the process of converting data from one form to another.

-------------------------------------------------------------------------------------------

8.) What is decoding ?
Answer -  Converting back to its original form into human understandable and machien understandable language
