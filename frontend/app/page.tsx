import Image from "next/image";
import { Button } from "@/components/ui/button"
import * as React from "react"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="text" className="sm:w-96 sm:px-0 w-full px-2">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="text">Text</TabsTrigger>
        <TabsTrigger value="image">Image</TabsTrigger>
        <TabsTrigger value="file">file</TabsTrigger>

      </TabsList>
      <TabsContent value="text">
        <Card>
          <CardHeader>
            <CardTitle>Send Text</CardTitle>
            <CardDescription>
              Send Text With Password
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="send-text">Your Text</Label>
              <Textarea id='send-text'/>
            </div>
            <div className="space-y-1">
            <Switch id="encryption" />
            <Label htmlFor="encryption">Encryption</Label>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Send</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="image">
        <Card>
          <CardHeader>
            <CardTitle>Send Image</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
export default function Home() {
  return (
    <div className="flex pt-20 justify-center content-center">
        <TabsDemo></TabsDemo>
    </div>
  );
}
