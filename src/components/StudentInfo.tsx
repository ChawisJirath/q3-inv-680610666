import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer"
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
export function StudentInfo() {
  return (
    // Use Drawer component to display student information
   <Drawer swipeDirection="right"> 
  <DrawerTrigger> 
    <Button variant="outline">Chawis Jirathitikul</Button> 
  </DrawerTrigger>
  <DrawerContent  > 
    <DrawerHeader> 
      <DrawerTitle>ข้อมูลนักศึกษา</DrawerTitle> 
      <DrawerDescription></DrawerDescription> 
    </DrawerHeader> 
    <Card> 
        <img src="/cafeatlampang.jpg" alt="Card top image" className="h-48 w-full object-cover" /> 
        <CardHeader> 
          <CardTitle>Chawis Jirathitikul</CardTitle> 
          <CardDescription>นักศึกษาคณะวิศวกรรมศาสตร์สาขาคอมพิวเตอร์ มหาวิทยาลัยเชียงใหม่</CardDescription> 
        </CardHeader> 
        <CardContent> 
          <p className="my-2">
            <Badge className="pill" >
              Hobbies
            </Badge>
            เล่นแบดมินตัน ฟังเพลง เล่นเกม ดูหนัง
          </p> 
          <p className="my-2">
            <Badge className="pill">
              Email
            </Badge>
            chawis_jirath@cmu.ac.th
          </p> 
          <p className="my-2">
            <Badge className="pill">
              Social
            </Badge>
             https://www.facebook.com/Chawis Jirathitikul/
          </p> 
        </CardContent> 
        <CardFooter> 
          <p>รหัสนักศึกษา 680610666</p> 
        </CardFooter> 
      </Card> 
    <DrawerFooter className="flex-1 overflow-y-auto"> 
      <DrawerClose className="mt-4"> 
        <Button variant="outline" className="w-full black">Close</Button> 
      </DrawerClose> 
    </DrawerFooter> 
  </DrawerContent> 
</Drawer>
  );
}
