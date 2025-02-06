'use client'
import { FormProviderSearchGarage } from '@elitevalet/forms/src/searchGarages'
import { SearchPage } from '@elitevalet/ui/src/components/templates/SearchPage'

export default function Page() {
  return (
    <FormProviderSearchGarage>
      <SearchPage />
    </FormProviderSearchGarage>
  )
}
