export interface Listing {
    id: number
    beds: number
    baths: number
    area: number
    city: string
    code: string
    street: string
    street_num: number
    price: number
    created_at?: string
    updated_at?: string
}

export interface PageProps {
    auth?: {
        user?: {
            id: number
            name: string
            email: string
        }
    }
    flash: {
        success?: string
        error?: string
    }
    [key: string]: any
}

export interface ListingIndexProps extends PageProps {
    listings: Listing[]
}

export interface ListingShowProps extends PageProps {
    listing: Listing
}

export interface ListingFormProps extends PageProps {
    listing?: Listing
}
