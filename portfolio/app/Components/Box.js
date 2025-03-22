import React from "react";
import Boxframe from "./Boxframe";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Box = () => {
  const det = ["Work", "Services", "About", "Plans"];

  return (
    <div className="flex justify-center space-x-4 flex-wrap space-y-4 ">
      <AlertDialog>
        <AlertDialogTrigger>
          <div>
            <Boxframe name="Work" />
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          {/* sion put the card here */}
          <AlertDialogAction>back</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog>
        <AlertDialogTrigger>
          <Boxframe name="Services" />
        </AlertDialogTrigger>
        <AlertDialogContent>
          {/* sion put the card here */}
          <AlertDialogAction>back</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog>
        <AlertDialogTrigger>
          <Boxframe name="About" />
        </AlertDialogTrigger>
        <AlertDialogContent>
          {/* sion put the card here */}
          <AlertDialogAction>back</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog>
        <AlertDialogTrigger>
          <Boxframe name="Plans" />
        </AlertDialogTrigger>
        <AlertDialogContent>
          {/* sion put the card here */}
          <AlertDialogAction>back</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Box;
