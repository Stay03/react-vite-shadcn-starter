import React, { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ComponentTest = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const [radioValue, setRadioValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [progressValue, setProgressValue] = useState(33);

  return (
    <div className="p-8 space-y-8 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">shadcn/ui Component Test</h1>
        <p className="text-gray-600">Testing all installed components</p>
      </div>

      {/* Alert */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Alert</h2>
        <Alert>
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>All components are working correctly.</AlertDescription>
        </Alert>
      </section>

      {/* Buttons & Badges */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Buttons & Badges</h2>
        <div className="flex gap-4 items-center">
          <Button>Primary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Badge>Default Badge</Badge>
          <Badge variant="secondary">Secondary Badge</Badge>
        </div>
      </section>

      {/* Cards */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card content</p>
            </CardContent>
            <CardFooter>
              <Button>Action</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Avatar & Skeleton</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-gray-500">john@example.com</p>
                </div>
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Form Components */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Form Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" />
            </div>
            
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Enter your message" />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch checked={switchValue} onCheckedChange={setSwitchValue} />
              <Label>Enable notifications</Label>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label>Select Option</Label>
              <Select value={selectValue} onValueChange={setSelectValue}>
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label>Radio Group</Label>
              <RadioGroup value={radioValue} onValueChange={setRadioValue}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option1" id="r1" />
                  <Label htmlFor="r1">Option 1</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option2" id="r2" />
                  <Label htmlFor="r2">Option 2</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </section>

      {/* Progress & Toggle */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Progress & Toggle</h2>
        <div className="space-y-4">
          <div>
            <Label>Progress: {progressValue}%</Label>
            <Progress value={progressValue} className="mt-2" />
            <Button 
              onClick={() => setProgressValue(Math.min(100, progressValue + 10))}
              className="mt-2"
            >
              Increase Progress
            </Button>
          </div>
          
          <div className="flex gap-4">
            <Toggle>Toggle Me</Toggle>
            <ToggleGroup type="single">
              <ToggleGroupItem value="a">A</ToggleGroupItem>
              <ToggleGroupItem value="b">B</ToggleGroupItem>
              <ToggleGroupItem value="c">C</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </section>

      {/* Table */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Table</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell><Badge variant="outline">Active</Badge></TableCell>
              <TableCell>Admin</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell><Badge>Active</Badge></TableCell>
              <TableCell>User</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      {/* Tabs */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Tabs</h2>
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content for Tab 1</TabsContent>
          <TabsContent value="tab2">Content for Tab 2</TabsContent>
          <TabsContent value="tab3">Content for Tab 3</TabsContent>
        </Tabs>
      </section>

      {/* Dialogs and Modals */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Dialogs & Modals</h2>
        <div className="flex gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogDescription>
                  This is a dialog description.
                </DialogDescription>
              </DialogHeader>
              <p>Dialog content goes here.</p>
            </DialogContent>
          </Dialog>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Delete Item</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Delete</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Sheet Title</SheetTitle>
                <SheetDescription>
                  Sheet description goes here.
                </SheetDescription>
              </SheetHeader>
              <p className="mt-4">Sheet content goes here.</p>
            </SheetContent>
          </Sheet>
        </div>
      </section>

      {/* Dropdown Menu */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Dropdown Menu</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>

      {/* Breadcrumb */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Breadcrumb</h2>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Test</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>

      {/* Collapsible */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Collapsible</h2>
        <Collapsible>
          <CollapsibleTrigger asChild>
            <Button variant="ghost">Toggle Details</Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <p className="mt-2 p-4 bg-gray-50 rounded">
              This content can be collapsed and expanded.
            </p>
          </CollapsibleContent>
        </Collapsible>
      </section>

      {/* Tooltip */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Tooltip</h2>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>This is a tooltip</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </section>

      <Separator />

      <div className="text-center">
        <p className="text-green-600 font-semibold">
          ✅ All components are working correctly!
        </p>
      </div>
    </div>
  );
};

export default ComponentTest;