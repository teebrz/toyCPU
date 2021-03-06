/*****************************************************************************
*
*              toyCPU : Assembly Programming Teaching Platform
*
*  This file is part of the toyCPU project. The project is distributed at:
*  https://github.com/maximecb/toyCPU
*
*
*  Copyright (c) 2011, Maxime Chevalier-Boisvert
*  All rights reserved.
*
*  This software is licensed under the following license (Modified BSD
*  License):
*
*  Redistribution and use in source and binary forms, with or without
*  modification, are permitted provided that the following conditions are
*  met:
*    * Redistributions of source code must retain the above copyright
*      notice, this list of conditions and the following disclaimer.
*    * Redistributions in binary form must reproduce the above copyright
*      notice, this list of conditions and the following disclaimer in the
*      documentation and/or other materials provided with the distribution.
*    * Neither the name of the Universite de Montreal nor the names of its
*      contributors may be used to endorse or promote products derived
*      from this software without specific prior written permission.
*
*  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
*  IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
*  TO, THE IMPLIED WARRANTIES OF MERCHApNTABILITY AND FITNESS FOR A
*  PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL UNIVERSITE DE
*  MONTREAL BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
*  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
*  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
*  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
*  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
*  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
*  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*
*****************************************************************************/

/**
@class Clock peripheral device
*/
function ClockDevice()
{
}

/**
Initialize the clock device
*/
ClockDevice.prototype.init = function ()
{
}

/**
Handler to get the time since bootup in milliseconds. 
Returns a 32-bit value as two 16-bit words.
*/
ClockDevice.prototype.getTimeMS = function (args, output)
{
    var timeMS = getTimeMillis();

    var lWord = timeMS & 0xFFFF;
    var hWord = (timeMS >> 16) & 0xFFFF;

    output.push(lWord);
    output.push(hWord);
}

/**
Message table
*/
ClockDevice.prototype.msgTable = (function ()
{
    var msgTable = [];

    // Time in milliseconds handler
    msgTable[0] = { numArgs: 0, handler: ClockDevice.prototype.getTimeMS };

    return msgTable;
})();

