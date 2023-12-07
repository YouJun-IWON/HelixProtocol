'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { toast } from '@/components/ui/use-toast';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useWeb3ModalProvider } from '@web3modal/ethers5/react';

import { ethers } from 'ethers'

const FormSchema = z.object({
  amount: z.number().min(1, {
    message: 'Username must be at least 1 XRP.',
  }),
});

const FundButton = ({ address, chainId }: any) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      amount: 1,
    },
  });

  const { walletProvider } = useWeb3ModalProvider()

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const finalData = { ...data, address: address, chainId: chainId };
    
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>
            {JSON.stringify(finalData, null, 2)}
          </code>
        </pre>
      ),
    });

    const ethersProvider =  new ethers.providers.Web3Provider(walletProvider!)
    const signer = await ethersProvider.getSigner()

    // const USDTContract = new ethers.Contract(USDTAddress, USDTAbi, signer)
    // const USDTBalance = await USDTContract.balanceOf(address)
    
    // console.log(ethers.utils.formatUnits(USDTBalance, 18))

  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='sign' className='text-md p-5'>
          Claim!
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] flex flex-col items-center justify-center'>
        <DialogHeader className='space-y-3 mt-3'>
          <DialogTitle>Check Claim</DialogTitle>
          <DialogDescription>
            Take advantage of the secure and solid Web3 project selected by
            Helix DAO. And receive Helix tokens for the project.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='w-2/3 space-y-6 flex flex-col items-center justify-center '
          >
            <FormField
              control={form.control}
              name='amount'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='0'
                      type='number'
                      {...field}
                      onChange={(e) => {
                        form.setValue('amount', Number(e.target.value));
                      }}
                    />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type='submit' variant='sign'>
                Submit
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default FundButton;
