import { Button } from "@/components/ui/button";
import { userService } from "@/services/user.service";

export default async function Home() {

  const { data } = await userService.getSession();

  console.log("user", data);

  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}