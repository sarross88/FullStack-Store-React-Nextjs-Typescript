import { Button } from '@/components/ui/button'
import { faker } from '@faker-js/faker'
import FormInput from '@/components/form/FormInput'
import PriceInput from '@/components/form/PriceInput'
import ImageInput from '@/components/form/ImageInput'
import TextAreaInput from '@/components/form/TextAreaInput'
import FormContainer from '@/components/form/FormContainer'
import { createProductAction } from '@/utils/actions'
import { SubmitButton } from '@/components/form/Buttons'
import CheckboxInput from '@/components/form/CheckBoxInput'

// const createProductAction = async (formData: FormData) => {
//   'use server'
//   const name = formData.get('name') as string
//   console.log(name)
// }

const CreateProductPage = () => {
  const name = faker.commerce.productName()
  const company = faker.company.name()
  const description = faker.lorem.paragraph({ min: 10, max: 12 })

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">create product</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <FormInput
              label="product name"
              name="name"
              type="text"
              defaultValue={name}
            />
            <FormInput
              label="company"
              name="company"
              type="text"
              defaultValue={company}
            />
            <PriceInput />
            <ImageInput />
          </div>
          <TextAreaInput
            name="description"
            labelText="product description"
            defaultValue={description}
          />
          <div className="mt-6">
            <CheckboxInput name="featured" label="featured" />
          </div>
          <SubmitButton text="create product" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  )
}
export default CreateProductPage
