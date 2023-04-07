import ky from 'ky'
import { baseUrl } from '@/config/urls'

export const kyService = ky.create({ prefixUrl: baseUrl })
