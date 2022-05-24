import { useMetaplex } from '@tf/hooks';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';
import { useCallback, useMemo } from 'react';

/* eslint-disable-next-line */
export interface NftResumeBuilderProps {}

interface ResumeNft {
  name: string;
  jobTitle: string;
  about: string;
  webite?: string;
  image?: string;
  phoneNumber?: string;
  email?: string;
}

export const NftResumeBuilder = (props: NftResumeBuilderProps) => {
  const { metaplex } = useMetaplex();
  const initialValues: ResumeNft = { name: '', jobTitle: '', about: '' };

  const nftCreated = useCallback(
    async (resumeNft: ResumeNft) => {
      if (resumeNft) {
        console.log('nftCreated', resumeNft);

        const { uri } = await metaplex.nfts().uploadMetadata({
          name: 'My Updated Metadata Name',
          description: 'My Updated Metadata Description',
        });

        const { nft } = await metaplex.nfts().create({
          uri,
          isMutable: true,
          sellerFeeBasisPoints: 100,
        });

        console.log('NFT', uri, nft);
      }
    },
    [metaplex]
  );

  return (
    <div>
      <h1 className="text-xl text-gray-900 dark:text-white my-4">
        web3 NFT resume builder
      </h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(
          values: ResumeNft,
          { setSubmitting, resetForm }: FormikHelpers<ResumeNft>
        ) => {
          nftCreated(values);
          setTimeout(() => {
            setSubmitting(false);
            resetForm();
          }, 500);
        }}
      >
        <Form>
          <div className="isolate -space-y-px rounded-md shadow-sm md:max-w-md max-w-full flex flex-col gap-2">
            <div className="relative border border-gray-300 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
              <label
                htmlFor="name"
                className="block text-xs font-medium text-gray-900"
              >
                Name
              </label>
              <Field
                id="name"
                name="name"
                placeholder="Name"
                className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              />
              {/* <input
            type="text"
            name="name"
            id="name"
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            placeholder="Jane Doe"
          /> */}
            </div>
            <div className="relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
              <label
                htmlFor="job-title"
                className="block text-xs font-medium text-gray-900"
              >
                Job Title
              </label>
              <input
                type="text"
                name="job-title"
                id="job-title"
                className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder="Head of Tomfoolery"
              />
            </div>

            <div className="mt-1">
              <textarea
                rows={4}
                name="comment"
                id="comment"
                placeholder="About me"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                defaultValue={''}
              />
            </div>

            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default NftResumeBuilder;
