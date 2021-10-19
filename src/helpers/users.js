const getUsers = async () => {
    const response = await fetch("http://localhost:3001/users", {
        method: "GET",
        credentials: "include",
        headers: {
            Accept: "*",
            "Content-Type": "application/json",
        },
    });
    if (response.status === 200) {
        const result = await response.json();
        if (result.success) {
            return result.users;
        }
    }
}

export default getUsers