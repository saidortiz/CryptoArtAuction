import types from './types'

// -------------------------------------------------------------------------
// Web3

export function connectWeb3(address) {
  return {
    type: types.connectWeb3.request,
    address
  }
}

// -------------------------------------------------------------------------
// Loading

export function setLoading(loading = false) {
  return {
    type: types.setLoading,
    loading
  }
}

// -------------------------------------------------------------------------
// Projects

export function fetchProjects() {
  return {
    type: types.fetchProjects.request
  }
}

// -------------------------------------------------------------------------
// Art States

export function artRangeChange(minX, minY, maxX, maxY) {
  return {
    type: types.artRangeChanged,
    minX,
    minY,
    maxX,
    maxY
  }
}

export function clickArt(x, y) {
  return {
    type: types.clickArt,
    x,
    y
  }
}

export function fastBid(art) {
  return {
    type: types.fastBid,
    art
  }
}

// -------------------------------------------------------------------------
// Bids

export function appendUnconfirmedBid(bid) {
  return {
    type: types.appendUnconfirmedBid,
    bid
  }
}

export function deleteUnconfirmedBid(bid) {
  return {
    type: types.deleteUnconfirmedBid,
    bid
  }
}

export function fetchOngoingAuctions() {
  return {
    type: types.fetchOngoingAuctions.request
  }
}

export function confirmBids(bids) {
  return {
    type: types.confirmBids.request,
    bids
  }
}

// -------------------------------------------------------------------------
// Stats

export function fetchStats() {
  return {
    type: types.fetchStats.request
  }
}

export function fetchAddressStats(address) {
  return {
    type: types.fetchAddressStats.request,
    address
  }
}

// -------------------------------------------------------------------------
// Modal

export function openModal(name, data) {
  return {
    type: types.modal.open,
    name,
    data
  }
}

export function closeModal() {
  return {
    type: types.modal.close
  }
}

// -------------------------------------------------------------------------
// Locations

export function navigateTo(url) {
  return {
    type: types.navigateTo,
    url
  }
}

// -------------------------------------------------------------------------
// Email

export function subscribeEmail(email) {
  return {
    type: types.subscribeEmail.request,
    email
  }
}

export function unsubscribeEmail() {
  return {
    type: types.unsubscribeEmail.request
  }
}

// -------------------------------------------------------------------------
// Sidebar

export function openSidebar() {
  return {
    type: types.sidebar.open
  }
}

export function closeSidebar() {
  return {
    type: types.sidebar.close
  }
}

// -------------------------------------------------------------------------
// Shift key

export function shiftDown() {
  return {
    type: types.shift.down
  }
}

export function shiftUp() {
  return {
    type: types.shift.up
  }
}
