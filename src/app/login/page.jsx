import { createClient } from "@/utils/supabase/client";

export default function Login() {
    const setNewView = async () => {
        console.log('Setting new view')
        const {data, error} = await createClient()
            .from("views")
            .insert({
                name: 'random name'
            })

        if (data) console.log(data)
        if (error) console.log(error)
    };

    setNewView();

    return (
        <div>Login</div>
    )
}
