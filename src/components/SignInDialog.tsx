"use client"
import { cn } from "~/lib/utils"
import { Dialog, DialogTrigger, DialogHeader, DialogContent, DialogDescription, DialogTitle, DialogFooter } from "./ui/dialog"
import { Button } from "./ui/button"
import { useState } from "react"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { DiscordLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons"
import UserAuthForm from "./UserAuthform"
import { signIn } from "next-auth/react"


export function DialogSignIn({ children }: { children: React.ReactNode }) {
	const [open, setOpen] = useState(false);
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				{children}
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px] p-4">
				<DialogHeader>
					<DialogTitle>Login</DialogTitle>
					<DialogDescription>
						Choose a login method below
					</DialogDescription>
				</DialogHeader>
				<div className="flex flex-row gap-4 p-1">
					<UserAuthForm loginProvider="discord" buttonLabel="Discord" icon={<DiscordLogoIcon className="h-5 w-5" />} />
					<UserAuthForm loginProvider="github" buttonLabel="Github" icon={<GitHubLogoIcon className="w-5 h-5" />} />
				</div>
				<div className="relative my-4">
					<div className="absolute inset-0 flex items-center">
						<div className="w-full border-t "></div>
					</div>
					<div className="relative flex justify-center text-sm">
						<span className=" px-2 text-muted-foreground">OR CONTINUE WITH</span>
					</div>
				</div>


				<ProfileForm />
				<DialogFooter className="flex justify-center">
					<span className="w-full text-gray-400 text-center text-sm">
						Don&apos;t have an account? <a href="/signup" className="underline">Sign up</a>
					</span>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

export function ProfileForm({ className }: React.ComponentProps<'form'>) {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		setIsLoading(true)
		const result = await signIn('credentials', {
			redirect: true,
			email,
			password,
		});

		if (result?.error) {
			console.error(result.error);
		} else {
			setIsLoading(false);
		}
	};
	return (
		<form className={cn("grid items-start gap-4", className)} onSubmit={handleSubmit}>
			<div className="grid gap-2">
				<Label htmlFor="email">Email</Label>
				<Input
					type="email"
					id="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</div>
			<div className="grid gap-2">
				<Label htmlFor="password">Password</Label>
				<Input
					type="password"
					id="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</div>
			<Button type="submit" className="w-full" isLoading={isLoading} disabled={isLoading}>Sign In</Button>
		</form>
	);
}
