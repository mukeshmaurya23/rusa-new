# check api with httpie/curl
port=5000
GREEN='\033[0;32m'
RED='\033[0;31m'
WHITE='\033[0;37m'

# what you want
# if (C,R,U,D,ID) { ... } using httpie POST GET PATCH DELETE

# # Create Task with httpie
# http -b POST :port/api/v1/task/ 
# # get all task
# http -b GET :port/api/v1/task/
# # get specific task
# http -b GET :port/api/v1/task/620f2f63e5dfd71e0779e525
# http -b GET :port/api/v1/task/id
# # Update Task
# http -b PATCH :port/api/v1/task/620f2f63e5dfd71e0779e525
# http -b PATCH :port/api/v1/task/id
# # Delete task
# http -b DELETE :port/api/v1/task/620f2f63e5dfd71e0779e525
# http -b DELETE :port/api/v1/task/id


# 1. get inp
echo C R U D ID:
read opr
create="${GREEN}$(http POST :${port}/api/v1/task hello=world)"
# chk inp
if [ $opr == "c" ]; then
	echo Create new task :
	read upd
	echo "Created"
	echo -e $create
elif [ $opr == "r" ]; then
	# get all task
	echo -e "\nGetting all task ..."
	echo -e "${GREEN}$(http -b GET :port/api/v1/task)"
elif [ $opr == "u" ]; then
	echo "Update ID : "
	read id
	echo -e "${GREEN}$(http -b PUT :port/api/v1/task/${id})"
elif [ $opr == "d" ]; then
	echo "Delete ID : "
	read id
	echo -e "${GREEN}$(http -b DELETE :port/api/v1/task/${id})"
elif [ $opr == "id" ]; then
	echo "Get ID : "
	read id
	echo -e "${GREEN}$(http -b GET :port/api/v1/task/${id})"
else
	echo "invalid "
fi

# echo -e "${GREEN}Hello"