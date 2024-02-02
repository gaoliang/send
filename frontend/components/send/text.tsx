"use client"

import { Button } from "@/components/ui/button"
import * as React from "react"
import { Switch } from "@/components/ui/switch"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"

import { z } from "zod"

const FormSchema = z.object({
    text: z.string().default(''),
    use_password: z.boolean().default(false).optional(),
    max_access_times: z.string().optional(),
    expire_peroid: z.string().default('1d').optional(),
    password: z.string().optional(),
})

export default function TextForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            max_access_times: '1',
            expire_peroid: '1d',
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data)
        // toast({
        //   title: "You submitted the following values:",
        //   description: (
        //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        //       <code className="text-white">{JSON.strinsgify(data, null, 2)}</code>
        //     </pre>
        //   ),
        // })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                <div>
                    <div className="space-y-4">

                        <FormField
                            control={form.control}
                            name="text"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>输入要发送的文本</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="..."
                                            className="h-36"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex justify-evenly items-center">
                            <div className=" grow">
                                <FormField
                                    control={form.control}
                                    name="max_access_times"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>下载次数</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a verified email to display" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="-1">不限制</SelectItem>
                                                    <SelectItem value="1">1次</SelectItem>
                                                    <SelectItem value="10">10次</SelectItem>
                                                    <SelectItem value="50">50次</SelectItem>
                                                    <SelectItem value="100">100次</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormDescription>
                                                超出后文件将会被删除
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <span className="px-4"> 或 </span>
                            <div className="grow">
                                <FormField
                                    control={form.control}
                                    name="expire_peroid"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>过期时间</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a verified email to display" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="1h">1小时后</SelectItem>
                                                    <SelectItem value="3h">3小时后</SelectItem>
                                                    <SelectItem value="1d">1天后</SelectItem>
                                                    <SelectItem value="3d">3天后</SelectItem>
                                                    <SelectItem value="7d">7天后</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormDescription>
                                                过期后文件将会被删除
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>



                        <FormField
                            control={form.control}
                            name="use_password"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                    <div className="space-y-0.5">
                                        <FormLabel className="text-base">
                                            使用端到端加密
                                        </FormLabel>
                                        <FormDescription className="space-y-1">
                                            使用端到端加密时将无法通过直链访问您的数据
                                        </FormDescription>
                                    </div>
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <Button className='w-full' type="submit">Send</Button>
            </form>
        </Form>
    )
}