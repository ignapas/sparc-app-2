import axios from 'axios'

const mbfSparcApiClient = axios.create({
  baseURL: process.env.MBF_SPARC_API,
  withCredentials: false,
  timeout: 9988
})

const searchDataset = async (apiClient, id) => {
  const response = await apiClient.get('image_search/' + id)
  return response.data
}

const getXMPInfo = async (apiClient, id) => {
  const response = await apiClient.get('image_xmp_info/' + id)
  return response.data
}

const getThumbnail = async (apiClient, id) => {
  return apiClient.get('thumbnail/' + id)
}

const getNeurolucidaThumbnail = async (apiClient, id, version, path) => {
  const config = {
    params: {
      datasetId: id,
      version,
      path: `files/${path}`
    }
  }
  const response = await apiClient.get('thumbnail/neurolucida', config)
  return response.data
}

const getImageInfo = async (apiClient, id) => {
  const response = await apiClient.get('image/' + id)
  return response.data
}

const getCollectionInfo = async (apiClient, id) => {
  return apiClient.get('collections/' + id)
}

const getBLVLink = async (apiClient, id) => {
  const response = await apiClient.get('image_blv_link/' + id)
  return response.data
}

const decodeViewParameter = encodedView => {
  const urlDecodedView = decodeURIComponent(encodedView)
  const decodedView = Buffer.from(urlDecodedView, 'base64').toString('binary')
  return decodedView.split('-')
}

const fetchNeurolucida360Url = payload => {
  return mbfSparcApiClient.post('', payload)
}

export default {
  decodeViewParameter,
  fetchNeurolucida360Url,
  getBLVLink,
  getThumbnail,
  getNeurolucidaThumbnail,
  searchDataset,
  getImageInfo,
  getCollectionInfo,
  getXMPInfo
}
