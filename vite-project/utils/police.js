let user = localStorage.getItem("currentUser") || null

if(!user) {
    location.assign("/pages/signup/")
}