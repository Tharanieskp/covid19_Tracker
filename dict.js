function random_function()
{
    var a=document.getElementById("input").value;
    if(a==="Andaman and Nicobar Islands")
    {
        var arr=["Nicobars","North and Middle Andaman","South Andaman"];
    }
    else if(a==="Andhra Pradesh")
    {
        var arr=["Anantapur","Chittoor","East Godavari","Guntur","Krishna","Kurnool","S.P.S. Nellore","Prakasam","Srikakulam","Visakhapatnam","Vizianagaram","West Godavari","Y.S.R. Kadapa"];
    }
	
    else if(a==="Arunachal Pradesh")
    {
        var arr=["Anjaw","Changlang","East Kameng","East Siang","Kra Daadi","Kurung Kumey","Lepa Rada","Lohit","Longding","Lower Dibang Valley","Lower Siang","Lower Subansiri","Namsai","Pakke Kessang","Papum Pare","Shi Yomi","Siang","Tawang","Tirap","Upper Dibang Valley","Upper Siang","Upper Subansiri","West Kameng","West Siang"];
    }	
    else if(a==="Assam")
    {
        var arr=["Baksa","Barpeta","Biswanath","Bongaigaon","Cachar","Charaideo","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh","Dima Hasao","Goalpara","Golaghat","Hailakandi","Hojai","Jorhat","Kamrup Metropolitan","Kamrup","Karbi Anglong","Karimganj","Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari","Sivasagar","Sonitpur","South Salmara Mankachar","Tinsukia","Udalguri","West Karbi Anglong"];
    }
    else if(a==="Bihar")
    {
        var arr=["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","Gopalganj","Jamui","Jehanabad","Kaimur","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa","Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"];
    }
    else if(a==="Chandigarh")
    {
        var arr=["Chandigarh"];
    }
    else if(a==="Chhattisgarh")
    {
        var arr=["Balod","Baloda Bazar","Balrampur","Bastar","Bametara","Bijapur","Bilaspur","Dakshin Bastar Dantewada","Dhamtari","Durg","Gariaband","Janjgir Champa","Jashpur","Kabeerdham","Kondagaon","Korba","Koriya","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma","Surajpur","Surguja","Uttar Bastar Kanker","Gaurela Pendra Marwahi"];
    }
    else if(a==="Dadra and Nagar Haveli and Daman and Diu")
    {
        var arr=["Daman","Diu","Dadra and Nagar Haveli"];
    }
    else if(a==="Delhi")
    {
        var arr=["Central Delhi","East Delhi","New Delhi","North Delhi","North East Delhi","North West Delhi","Shahdara","South Delhi","South East Delhi","South West Delhi","West Delhi"];
    }
    else if(a==="Goa")
    {
        var arr=["North Goa","South Goa"];
    }
    else if(a==="Gujarat")
    {
        var arr=["Ahmedabad","Amreli","Anand","Aravalli","Banaskantha","Bharuch","Bhavnagar","Botad","Chhota Udaipur","Dahod","Dang","Devbhumi Dwarka","Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kheda","Kutch","Mahisagar","Mehsana","Morbi","Narmada","Navsari","Panchmahal","Patan","Porbandar","Rajkot","Sabarkantha","Surat","Surendranagar","Tapi","Vadodara","Valsad"];
    }
    else if(a==="Haryana")
    {
        var arr=["Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurugram","Hisar","Jhajjar","Jind","Kaithal","Karnal","Kurukshetra","Mahendragarh","Nuh","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"];
    }
    else if(a==="Himachal Pradesh")
    {
        var arr=["Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu","Lahaul and Spiti","Mandi","Shimla","Sirmaur","Solan","Una"];
    }
    else if(a==="Jammu and Kashmir")
    {
        var arr=["Anantnag","Bandipora","Baramulla","Budgam","Doda","Ganderbal","Jammu","Kathua","Kishtwar","Kulgam","Kupwara","Mirpur","Muzaffarabad","Pulwama","Punch","Rajouri","Ramban","Reasi","Samba","Shopiyan","Srinagar","Udhampur"];
    }
    else if(a==="Jharkhand")
    {
        var arr=["Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum","Garhwa","Giridih","Godda","Gumla","Hazaribagh","Jamtara","Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu","Ramgarh","Ranchi","Sahibganj","Saraikela-Kharsawan","Simdega","West Singhbhum"];
    }
    else if(a==="Karnataka")
    {
        var arr=["Bagalkote","Ballari","Belagavi","Bengaluru Rural","Bengaluru Urban","Bidar","Chamarajanagara","Chikkaballapura","Chikkamagaluru","Chitradurga","Dakshina Kannada","Davanagere","Dharwad","Gadag","Hassan","Haveri","Kalaburagi","Kodagu","Kolar","Koppal","Mandya","Mysuru","Raichur","Ramanagara","Shivamogga","Tumakuru","Udupi","Uttara Kannada","Vijayapura","Yadgir"];
    }
    else if(a==="Kerala")
    {
        var arr=["Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"];
    }
    else if(a==="Lakshadweep")
    {
        var arr=["Lakshadweep"];
    }
    else if(a==="Madhya Pradesh")
    {
        var arr=["Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat","Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori","Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur","Jhabua","Katni","Khandwa","Khargone","Mandla","Mandsaur","Morena","Narsinghpur","Neemuch","Panna","Raisen","Rajgarh","Ratlam","Rewa","Sagar","Satna","Sehore","Seoni","Shahdol","Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli","Tikamgarh","Ujjain","Umaria","Vidisha"];
    }
    else if(a==="Maharashtra")
    {
        var arr=["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai","Mumbai Suburban","Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Palghar","Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara","Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal"];
    }
    else if(a==="Manipur")
    {
        var arr=["Bishnupur","Chandel","Churachandpur","Imphal East","Imphal West","Jiribam","Kakching","Kamjong","Kangpokpi","Noney","Pherzawl","Senapati","Tamenglong","Tengnoupal","Thoubal","Ukhrul"];
    }
    else if(a==="Meghalaya")
    {
        var arr=["East Garo Hills","East Jaintia Hills","East Khasi Hills","North Garo Hills","Ribhoi","South Garo Hills","South West Garo Hills","South West Khasi Hills","West Garo Hills","West Jaintia Hills","West Khasi Hills"];
    }
    else if(a==="Mizoram")
    {
        var arr=["Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Serchhip"];
    }
    else if(a==="Nagaland")
    {
        var arr=["Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Peren","Phek","Tuensang","Wokha","Zunheboto"];
    }
    else if(a==="Odisha")
    {
        var arr=["Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh","Cuttack","Deogarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghpur","Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara","Kendujhar","Khordha","Koraput","Malkangiri","Mayurbhanj","Nabarangapur","Nayagarh","Nuapada","Puri","Rayagada","Sambalpur","Subarnapur","Sundargarh"];
    }
    else if(a==="Puducherry")
    {
        var arr=["Karaikal","Mahe","Puducherry","Yanam"];
    }
       else if(a==="Punjab")
    {
        var arr=["Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib","Fazilka","Ferozepur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Mansa","Moga","Pathankot","Patiala","Rupnagar","S.A.S. Nagar","Sangrur","Shahid Bhagat Singh Nagar","Sri Muktsar Sahib","Tarn Taran"];
    }
    else if(a==="Rajasthan")
    {
        var arr=["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dholpur","Dungarpur","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Tonk","Udaipur"];
    }
    else if(a==="Sikkim")
    {
        var arr=["East Sikkim","North Sikkim","South Sikkim","West Sikkim"];
    }
    else if(a==="Tamil Nadu")
    {
        var arr=["Ariyalur","Chengalpattu","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kallakurichi","Kancheepuram","Kanyakumari","Karur","Krishnagiri","Madurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Ranipet","Salem","Sivaganga","Tenkasi","Thanjavur","Theni","Thiruvallur","Thiruvarur","Thoothukkudi","Tiruchirappalli","Tirunelveli","Tirupathur","Tiruppur","Tiruvannamalai","Vellore","Viluppuram","Virudhunagar"];
    }
    else if(a==="Telangana")
    {
        var arr=["Adilabad","Bhadradri Kothagudem","Hyderabad","Jagtial","Jangaon","Jayashankar Bhupalapally","Jogulamba Gadwal","Kamareddy","Karimnagar","Khammam","Komaram Bheem","Mahabubabad","Mahabubnagar","Mancherial","Medak","Medchal Malkajgiri","Mulugu","Nagarkurnool","Nalgonda","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Ranga Reddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal Rural","Warangal Urban","Yadadri Bhuvanagiri"];
    }
    else if(a==="Tripura")
    {
        var arr=["Dhalai","Gomati","Khowai","North Tripura","Sipahijala","South Tripura","Unokoti","West Tripura"];
    }
    else if(a==="Uttar Pradesh")
    {
        var arr=["Agra","Aligarh","Ambedkar Nagar","Amethi","Amroha","Auraiya","Ayodhya","Azamgarh","Baghpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bhadohi","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hapur","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar","Kasganj","Kaushambi","Kushinagar","Lakhimpur Kheri","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","Rae Bareli","Rampur","Saharanpur","Sambhal","Sant Kabir Nagar","Shahjahanpur","Shamli","Shrawasti","Siddharthnagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"];
    }
    else if(a==="Uttarakhand")
    {
        var arr=["Almora","Bageshwar","Chamoli","Champawat","Dehradun","Haridwar","Nainital","Pauri Garhwal","Pithoragarh","Rudraprayag","Tehri Garhwal","Udham Singh Nagar","Uttarkashi"];
    }
    else if(a==="West Bengal")
    {
        var arr=["Alipurduar","Bankura","Birbhum","Cooch Behar","Dakshin Dinajpur","Darjeeling","Hooghly","Howrah","Jalpaiguri","Jhargram","Kalimpong","Kolkata","Malda","Murshidabad","Nadia","North 24 Parganas","Paschim Bardhaman","Paschim Medinipur","Purba Bardhaman","Purba Medinipur","Purulia","South 24 Parganas","Uttar Dinajpur"];
    }
    else if(a==="Select State")
    {
        var arr=["Select District"];
    }
    var string="";
    
 
    for(i=0;i<arr.length;i++)
    {
        string=string+"<option value='"+arr[i]+"'>"+arr[i]+"</option>";
    }
    document.getElementById("output").innerHTML=string;
}
