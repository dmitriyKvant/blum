"use client"

import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure,
} from "@nextui-org/modal"
import { useForm } from "react-hook-form"

import { http } from "@/shared/api"
import { ROUTE } from "@/shared/config"

type TFormData = {
	url: URL
}

export const CompleteTaskForm = () => {
	const { register, handleSubmit, reset } = useForm<TFormData>()
	const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure()

	const onSubmit = async (formData: TFormData) => {
		await http.post(ROUTE.API_COMPLETE_TASK, { url: formData.url })
		onClose()
		reset()
	}

	return (
		<>
			<Button onPress={onOpen}>Complete Task</Button>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}>
				<ModalContent>
					<form onSubmit={handleSubmit(onSubmit)}>
						<ModalHeader>Complete Task</ModalHeader>
						<ModalBody>
							<Input
								{...register("url", { required: true })}
								autoFocus
								label="URL"
								variant="bordered"
							/>
						</ModalBody>
						<ModalFooter>
							<Button
								color="primary"
								type="submit">
								Send
							</Button>
						</ModalFooter>
					</form>
				</ModalContent>
			</Modal>
		</>
	)
}
