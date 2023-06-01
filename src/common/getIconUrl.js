const getIconUrl = (IconId, iconsList) => {
  const iconSearchId = `%2F${IconId}`
  let iconUrl;
  iconsList.forEach(url => {
    if (url.includes(iconSearchId)) iconUrl = url
  })
  return iconUrl
}

export default getIconUrl