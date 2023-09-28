<template>
    <v-container class="d-flex justify-space-between flex-column flex-grow-1">
        <div class="mb-10 mt-n4" v-if="usbSupported">
            <h6 class="text-h6 pb-4">Prepare your device</h6>

            <div class="text-body-1">
                <p>
                    This is an easy way to install
                    {{ $root.$data.OS_NAME }} on your device. 
                    Your device needs to have <strong>Android 12</strong> installed, if you own a Pixel 3 or 3XL.
                    If you own a Pixel 5a, you need to have <strong>Android 12.1</strong> installed.
                    You can install it <a href="https://flash.android.com/" target="_blank">here</a>.
                    You’ll need an
                    <strong>unlocked</strong> model of one of the supported
                    devices:
                </p>
            </div>

            <v-list-item
                two-line
                v-for="device in $root.$data.SUPPORTED_DEVICES"
                :key="device.model"
            >
                <v-list-item-content>
                    <v-list-item-title>{{ device.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{
                        device.model
                    }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            
            <div class="text-body-1">
                <p>
                    <br/>
                    By installing ethOS, you agree to the <a href="/termsofuse.html" target="_blank"><strong>Terms of Use</strong></a> of ethOS.
                </p>
            </div>
        </div>

    

        <div class="mb-10 mt-n4" v-else>
            <h6 class="text-h6 pb-4 red--text text--darken-4">
                Your browser isn’t supported
            </h6>

            <div class="text-body-1">
                <p>
                    Unfortunately, you can’t use this web installer for
                    {{ $root.$data.OS_NAME }} because your browser doesn’t
                    support WebUSB. Only Google Chrome and other browsers based
                    on Chromium, such as Brave and Microsoft Edge, are supported.
                </p>
            </div>

            <div class="text-body-1 mt-4">
                <p>
                    If you think this is a mistake, update your browser to the
                    latest version and try again.
                </p>
            </div>
        </div>

        <div class="d-flex justify-space-between flex-row-reverse">
            <v-btn

                color="primary"
                elevation="2"
                rounded
                x-large
                @click="$bubble('nextStep')"
                :disabled="!usbSupported"
            >
                Start
                <v-icon dark right>mdi-arrow-right</v-icon>
            </v-btn>
        </div>
    </v-container>
</template>

<script>
export default {
    props: ["device", "blobStore", "active"],

    data: () => ({
        usbSupported: "usb" in navigator,
    }),

    watch: {
        active: async function (newState) {
            if (newState) {
                this.saEvent("step_prepare");
            }
        },
    },
};
</script>
