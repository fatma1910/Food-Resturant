import React , {useState} from 'react'
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  import { Button } from "./ui/button";
  import { Label } from "./ui/label";
  import { Input } from "./ui/input";


export const ResrvationForm = () => {
    const [date, setDate] = React.useState();
  return (
    <form className='flex flex-col gap-y-10'>
        <div className='grid gap-[30px]'>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-[30px]'>
                <div>
                    <label htmlFor="firstname">first name</label>
                    <Input id="firstname" type="text"/>
                </div>
                <div>
                    <label htmlFor="lastname">last name</label>
                    <Input id="lastname" type="text"/>
                </div>
                </div>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-[30px]' >
                    <div>
                        <label htmlFor="">date</label>
                        <Popover>
                            <PopoverTrigger asChild>
                            <Button
                                variant={"input"}
                                className={cn(
                                "w-full justify-start text-left font-normal",
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div>
                        <label>Person</label>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue className='placeholder:text-white' placeholder="How Many of People?" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel >People</SelectLabel>
                                <SelectItem value="1">1</SelectItem>
                                <SelectItem value="2">2</SelectItem>
                                <SelectItem value="3">3</SelectItem>
                                <SelectItem value="4">4</SelectItem>
                                <SelectItem value="5">5</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
            
            </div>
        </div>
        <Button className='w-full xl:w-auto xl:self-end uppercase '>Book a table</Button>
    </form>
  )
}
