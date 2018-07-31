# FriendFinder

This web application will take the results of a survey and match them to exsisting user profiles to find the best match.

NODE dependencies
1. express
1. bodyParser
1. path
1. random-name

The user answers survery questions which assigns values to each answer.
The sum of the answer values is then compared to the sum of existing profile's answer values.
The best matched profile is then the profile with the smallest difference between the user's answer value sum and the exsisting profiles.  

