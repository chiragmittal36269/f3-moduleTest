// // let ip = "123";

// $.getJSON("https://api.ipify.org?format=json", function (data) {
// 	// Setting text of element P with id gfg
// 	ip = data.ip;

// 	$("#gfg").html(data.ip);

// 	callIp(data.ip);
// });

// function callIp(ip) {
// 	console.log(ip);

// 	// ip_address = "8.8.8.8";
// 	// url = f"https://ipinfo.io/{ip}/geo";

// 	// response = requests.get(url);
// 	// data = response.json();

// 	// console.log(data);

// 	const url = `https://ipinfo.io/${ip}/geo`;

// 	fetch(url)
// 		.then((response) => {
// 			if (!response.ok) {
// 				throw new Error(
// 					`Network response was not ok: ${response.status}`
// 				);
// 			}
// 			return response.json();
// 		})
// 		.then((data) => {
// 			console.log(data);
// 			// You can access specific geolocation information from the 'data' object
// 			const country = data.country;
// 			const city = data.city;
// 			const region = data.region;
// 			const loc = data.loc; // Latitude and longitude
// 			// ... do something with the data
// 		})
// 		.catch((error) => {
// 			console.error("Fetch error:", error);
// 		});
// }

// console.log(ip);

const ip_paste = document.getElementById("gfg");

let ip = "";

fetch("https://api.ipify.org?format=json")
	.then((result) => result.json())
	.then((data) => {
		ip_paste.innerHTML = data.ip;
		ip = data.ip;
		console.log(data.ip);
	});

// fetch(" https://ipinfo.io/${ip}/geo")
// 	.then((result) => result.json())
// 	.then((data) => {
// 		console.log(data);
// 	});

// const ipAddress = "8.8.8.8"; // Replace with the IP address you want to query
// const url = `https://ipinfo.io/${ip}/geo`;

// fetch(url)
// 	.then((response) => {
// 		if (!response.ok) {
// 			throw new Error(`Network response was not ok: ${response.status}`);
// 		}
// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log(data);
// 		// Now you can access the geolocation information from the 'data' object
// 		const country = data.country;
// 		const region = data.region;
// 		const city = data.city;
// 		const loc = data.loc; // Latitude and longitude
// 		// ... and so on
// 	})
// 	.catch((error) => {
// 		console.error("Error fetching geolocation:", error);
// 	});

// jQuery.get(
// 	"http://ipinfo.io",
// 	function (response) {
// 		console.log(response.city);
// 	},
// 	"jsonp"
// );

// const pincode = "321001"; // Replace with the desired PIN code
// const apiUrl = `https://api.postalpincode.in/pincode/${pincode}`;

// // Make a GET request to the API endpoint
// fetch(apiUrl)
// 	.then((response) => response.json())
// 	.then((data) => {
// 		// Handle the API response data
// 		if (data && data.length > 0) {
// 			console.log(data);
// 			const result = data[0];
// 			console.log(result);
// 			if (result.Status === "Success") {
// 				result.PostOffice.forEach((element) => {
// 					const postOffice = element;
// 					console.log("PIN Code:", postOffice.Pincode);
// 					console.log("Office Name:", postOffice.Name);
// 					console.log("District:", postOffice.District);
// 				});
// 				// const postOffice = result.PostOffice[0];
// 				// console.log("PIN Code:", postOffice.Pincode);
// 				// console.log("Office Name:", postOffice.Name);
// 				// console.log("District:", postOffice.District);
// 				// ... other properties you want to extract
// 			} else {
// 				console.log("API Error:", result.Message);
// 			}
// 		} else {
// 			console.log("Invalid response from API");
// 		}
// 	})
// 	.catch((error) => {
// 		console.error("Fetch Error:", error);
// 	});

// const ipAddress = "8.8.8.8"; // Replace with the IP address you have
// Make a GET request to the IP-API service
ip = "182.68.30.237";
// fetch(`http://ip-api.com/json/${ip}`)
// 	.then((response) => response.json())
// 	.then((data) => {
// 		// Handle the API response data
// 		const postalCode = data.zip || "Postal code not available";

// 		console.log("Estimated Postal Code:", postalCode);
// 	})
// 	.catch((error) => {
// 		console.error("Fetch Error:", error);
// 	});

const button = document.getElementById("start");

button.addEventListener("click", (event) => {
	window.location.href = "./page-2";
});
