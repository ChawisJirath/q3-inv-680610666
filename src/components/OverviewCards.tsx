import { useItemStore } from '@/store/dataStore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants } from '@/components/ui/tabs'
export function OverviewCards() {
  const inventory = useItemStore((state) => state.inventory);
  const totalProducts = inventory.length;
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="bycategory">By Category</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Stock Value</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl text-red-500 font-bold">฿...</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl text-blue-500 font-bold">{totalProducts}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Total Units in Stock</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl text-green-700 font-bold">...</div>
        </CardContent>
      </Card>
      </TabsContent>
      <TabsContent value="bycategory">
        <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Electronics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl text-red-500 font-bold">฿</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Stationery</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl text-blue-500 font-bold">฿</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Grocery</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl text-green-700 font-bold">฿</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Clothing</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl text-red-500 font-bold">
      </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Tools</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl text-blue-500 font-bold">฿</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Other</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl text-green-700 font-bold">฿</div>
        </CardContent>
      </Card>
      </TabsContent>
    </Tabs>
      
    </div>
  );
}
