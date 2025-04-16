const Logout = () => {

  const onLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("name")
    window.location.href = "/signin"
  }

  return (
    <div className="header md:flex justify-between pt-5 font-nunito">
      <p className="text-32 font-bold">Log out</p>
      <button className="bg-[#563091] text-white py-3 px-20 rounded-lg mt-3 md:mt-0 text-sm min-h-[48px]" onClick={onLogout}>Log out</button>
    </div>
  )
}

export default Logout
