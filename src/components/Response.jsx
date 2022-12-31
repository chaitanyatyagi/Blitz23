import React from 'react'
import { useState } from 'react'

function Response({ resultData, responseData }) {
    return (
        <div class="receipt">
            <table class="table-receipt">
                <thead>
                    <tr>
                        <th class="th-header"
                            colspan="2">PAYMENT RECEIPT
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {responseData.map(name => {
                        if (name !== "CHECKSUMHASH") {
                            <tr>
                                <td class="td-title">{name}</td>
                                <td class="td-content">{responseData[name]}</td>
                            </tr>
                        }
                    })}
                    <tr>
                        <td class="td-bottom"
                            colspan="2">Thank you!.
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Response