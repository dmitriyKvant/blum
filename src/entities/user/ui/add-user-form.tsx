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

import type { IUser } from "@/entities/user"

import { http } from "@/shared/api"
import { ROUTE } from "@/shared/config"

type TFormData = Pick<IUser, "accessToken">

export const AddUserForm = () => {
	const { register, reset, handleSubmit } = useForm<TFormData>()
	const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure()

	const onSubmit = async (formData: TFormData) => {
		const response = await http.post(ROUTE.API_CREATE_USER, {
			accessToken: formData.accessToken,
		})
		if (response.status === 200) {
			onClose()
			reset()
		}
	}

	return (
		<>
			<Button onPress={onOpen}>Add User</Button>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}>
				<ModalContent>
					<form onSubmit={handleSubmit(onSubmit)}>
						<ModalHeader>Add User</ModalHeader>
						<ModalBody>
							<Input
								{...register("accessToken", { required: true })}
								autoFocus
								label="Access Token"
								variant="bordered"
							/>
						</ModalBody>
						<ModalFooter>
							<Button
								color="primary"
								type="submit">
								Add
							</Button>
						</ModalFooter>
					</form>
				</ModalContent>
			</Modal>
		</>
	)
}
